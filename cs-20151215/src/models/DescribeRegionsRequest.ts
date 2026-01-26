// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeRegionsRequest extends $dara.Model {
  /**
   * @example
   * zh-CN
   */
  acceptLanguage?: string;
  /**
   * @example
   * ManagedKubernetes
   */
  clusterType?: string;
  /**
   * @example
   * Default
   */
  profile?: string;
  static names(): { [key: string]: string } {
    return {
      acceptLanguage: 'acceptLanguage',
      clusterType: 'clusterType',
      profile: 'profile',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptLanguage: 'string',
      clusterType: 'string',
      profile: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

