// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeInstanceTypesResponseBodyInstanceTypesInstanceTypeEnhancedNetwork extends $dara.Model {
  /**
   * @remarks
   * >  This parameter is not publicly available.
   * 
   * @example
   * true
   */
  rssSupport?: boolean;
  /**
   * @remarks
   * >  This parameter is not publicly available.
   * 
   * @example
   * true
   */
  sriovSupport?: boolean;
  /**
   * @remarks
   * >  This parameter is not publicly available.
   * 
   * @example
   * 5
   */
  vfQueueNumberPerEni?: number;
  static names(): { [key: string]: string } {
    return {
      rssSupport: 'RssSupport',
      sriovSupport: 'SriovSupport',
      vfQueueNumberPerEni: 'VfQueueNumberPerEni',
    };
  }

  static types(): { [key: string]: any } {
    return {
      rssSupport: 'boolean',
      sriovSupport: 'boolean',
      vfQueueNumberPerEni: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

