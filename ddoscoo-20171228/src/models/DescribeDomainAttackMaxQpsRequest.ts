// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDomainAttackMaxQpsRequest extends $dara.Model {
  /**
   * @example
   * example.aliyundoc.com
   */
  domain?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1667801940
   */
  endTime?: number;
  /**
   * @example
   * rg-acfm2pz25js****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1657562370
   */
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      domain: 'Domain',
      endTime: 'EndTime',
      resourceGroupId: 'ResourceGroupId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domain: 'string',
      endTime: 'number',
      resourceGroupId: 'string',
      startTime: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

