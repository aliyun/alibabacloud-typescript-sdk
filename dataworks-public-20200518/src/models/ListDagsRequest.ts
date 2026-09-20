// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDagsRequest extends $dara.Model {
  /**
   * @remarks
   * The unique identifier of the data backfill instance. You can call the [GetDag](https://help.aliyun.com/document_detail/189753.html) operation to obtain this value.
   * 
   * This parameter is required.
   * 
   * @example
   * 123
   */
  opSeq?: number;
  /**
   * @remarks
   * The identifier of the scheduling O&M environment. PROD indicates the production environment, and DEV indicates the development environment.
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

