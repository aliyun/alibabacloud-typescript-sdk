// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeLiveDomainStagingConfigRequest extends $dara.Model {
  /**
   * @remarks
   * The accelerated domain name.
   * 
   * This parameter is required.
   * 
   * @example
   * developer.aliyundoc.com
   */
  domainName?: string;
  /**
   * @remarks
   * The feature that you want to query. Separate multiple features with commas (,).
   * 
   * This parameter is required.
   * 
   * @example
   * aliauth
   */
  functionNames?: string;
  ownerId?: number;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      domainName: 'DomainName',
      functionNames: 'FunctionNames',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainName: 'string',
      functionNames: 'string',
      ownerId: 'number',
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

