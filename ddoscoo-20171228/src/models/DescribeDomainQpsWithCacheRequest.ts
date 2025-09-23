// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDomainQpsWithCacheRequest extends $dara.Model {
  /**
   * @example
   * www.example.com
   */
  domain?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1577796336
   */
  endTime?: number;
  /**
   * @example
   * xx
   */
  resourceGroupId?: string;
  /**
   * @example
   * 1.1.1.1
   */
  sourceIp?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1577794536
   */
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      domain: 'Domain',
      endTime: 'EndTime',
      resourceGroupId: 'ResourceGroupId',
      sourceIp: 'SourceIp',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domain: 'string',
      endTime: 'number',
      resourceGroupId: 'string',
      sourceIp: 'string',
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

