// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeFileUploadSignatureRequest extends $dara.Model {
  callFrom?: string;
  /**
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

