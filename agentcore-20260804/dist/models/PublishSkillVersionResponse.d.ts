import * as $dara from '@darabonba/typescript';
import { PublishSkillVersionResponseBody } from "./PublishSkillVersionResponseBody";
export declare class PublishSkillVersionResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: PublishSkillVersionResponseBody;
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
