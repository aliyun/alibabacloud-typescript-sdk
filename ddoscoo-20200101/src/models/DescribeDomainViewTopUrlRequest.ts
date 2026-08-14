// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDomainViewTopUrlRequest extends $dara.Model {
  domain?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  endTime?: number;
  inerval?: number;
  resourceGroupId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  startTime?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  top?: number;
  static names(): { [key: string]: string } {
    return {
      domain: 'Domain',
      endTime: 'EndTime',
      inerval: 'Inerval',
      resourceGroupId: 'ResourceGroupId',
      startTime: 'StartTime',
      top: 'Top',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domain: 'string',
      endTime: 'number',
      inerval: 'number',
      resourceGroupId: 'string',
      startTime: 'number',
      top: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

