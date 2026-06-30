// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetInvalidDomainCountRequest extends $dara.Model {
  /**
   * @remarks
   * The region ID of the Alibaba Cloud Global Accelerator (GA) instance. Set the value to **cn-hangzhou**.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

