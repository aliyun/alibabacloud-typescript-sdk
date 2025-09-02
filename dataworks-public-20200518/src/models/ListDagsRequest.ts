// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDagsRequest extends $dara.Model {
  /**
   * @remarks
   * The sequence number that uniquely identifies the data backfill operation. You can call the [GetDag](https://help.aliyun.com/document_detail/189753.html) operation to query the sequence number.
   * 
   * This parameter is required.
   * 
   * @example
   * 123
   */
  opSeq?: number;
  /**
   * @remarks
   * The environment of the workspace. Valid values: PROD and DEV. The value PROD indicates the production environment, and the value DEV indicates the development environment.
   * 
   * This parameter is required.
   * 
   * @example
   * PROD
   */
  projectEnv?: string;
  static names(): { [key: string]: string } {
    return {
      opSeq: 'OpSeq',
      projectEnv: 'ProjectEnv',
    };
  }

  static types(): { [key: string]: any } {
    return {
      opSeq: 'number',
      projectEnv: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

