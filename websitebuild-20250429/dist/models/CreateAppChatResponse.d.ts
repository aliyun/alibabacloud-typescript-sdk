import * as $dara from '@darabonba/typescript';
export declare class CreateAppChatResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    id?: string;
    event?: string;
    body?: string;
    static names(): {
        [key: string]: string;
    };
    static types(): {
        [key: string]: any;
    };
    validate(): void;
    constructor(map?: {
        [key: string]: any;
    });
}
