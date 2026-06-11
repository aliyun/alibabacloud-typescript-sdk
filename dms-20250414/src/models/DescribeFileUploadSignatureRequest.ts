// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeFileUploadSignatureRequest extends $dara.Model {
  /**
   * @remarks
   * Used by the frontend only
   * 
   * @example
   * 仅前端使用
   */
  callFrom?: string;
  /**
   * @remarks
   * Current DMS unit
   * 
   * @example
   * cn-hangzhou
   */
  dmsUnit?: string;
  static names(): { [key: string]: string } {
    return {
      callFrom: 'CallFrom',
      dmsUnit: 'DmsUnit',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callFrom: 'string',
      dmsUnit: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

