// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetResolveStatisticsRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * www.aliyun.com
   */
  domainName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * month
   */
  granularity?: string;
  /**
   * @example
   * https
   */
  protocolName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 2
   */
  timeSpan?: number;
  static names(): { [key: string]: string } {
    return {
      domainName: 'DomainName',
      granularity: 'Granularity',
      protocolName: 'ProtocolName',
      timeSpan: 'TimeSpan',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainName: 'string',
      granularity: 'string',
      protocolName: 'string',
      timeSpan: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

