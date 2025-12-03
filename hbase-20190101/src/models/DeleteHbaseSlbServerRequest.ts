// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteHBaseSlbServerRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * hb-t4naqsay5gn****
   */
  clusterId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * thrift
   */
  slbServer?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      slbServer: 'SlbServer',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      slbServer: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

