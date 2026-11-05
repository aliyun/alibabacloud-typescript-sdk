import * as $dara from '@darabonba/typescript';
import { DeleteAppSceneRecipientResponseBody } from "./DeleteAppSceneRecipientResponseBody";
export declare class DeleteAppSceneRecipientResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: DeleteAppSceneRecipientResponseBody;
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
