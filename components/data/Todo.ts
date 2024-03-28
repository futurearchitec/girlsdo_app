import { useState } from 'react';
import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';

export class Todo {

    private _title?: string | undefined;
    private _description?: string | undefined;
    private _isTimed?: boolean | undefined;
    private _category?: string | undefined;
    private _priority?: number | undefined;
    private readonly _id: string = uuidv4();
    private _date?: Date | undefined;
    private static readonly _nodate: Date = new Date(1900, 0, 1, 0, 0, 0, 0);

    public get id(): string {
        return this._id;
    }

    public get title(): string | undefined {
        return this._title;
    }
    public set title(value: string | undefined) {
        this._title = value;
    }

    public get description(): string | undefined {
        return this._description;
    }
    public set description(value: string | undefined) {
        this._description = value;
    }

    public get isTimed(): boolean | undefined {
        return this._isTimed;
    }
    public set isTimed(value: boolean | undefined) {
        this._isTimed = value;
    }

    public get category(): string | undefined {
        return this._category;
    }
    public set category(value: string | undefined) {
        this._category = value;
    }

    public get priority(): number | undefined {
        return this._priority;
    }
    public set priority(value: number | undefined) {
        this._priority = value;
    }

    public get date(): Date | undefined {
        return this._date;
    }
    public set date(value: Date | undefined) {
        this._date = value;
    }

    public static get nodate(): Date {
        return Todo._nodate;
    }
    
}