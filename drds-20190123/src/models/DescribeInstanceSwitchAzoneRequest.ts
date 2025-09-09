// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeInstanceSwitchAzoneRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the DRDS instance.
   * 
   * This parameter is required.
   * 
   * @example
   * drdsxxxxxxxxxxxx
   */
  drdsInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      drdsInstanceId: 'DrdsInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      drdsInstanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

