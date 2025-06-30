// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeResolverAvailableZonesRequest extends $dara.Model {
  /**
   * @remarks
   * The zone ID.
   * 
   * @example
   * cn-zhangjiakou-a
   */
  azId?: string;
  /**
   * @remarks
   * The language of the response. Valid values:
   * 
   * *   zh: Chinese
   * *   en: English
   * 
   * Default value: en.
   * 
   * @example
   * en
   */
  lang?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-zhangjiakou
   */
  resolverRegionId?: string;
  static names(): { [key: string]: string } {
    return {
      azId: 'AzId',
      lang: 'Lang',
      resolverRegionId: 'ResolverRegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      azId: 'string',
      lang: 'string',
      resolverRegionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

