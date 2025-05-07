// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BuildPipelinePackageConfig extends $dara.Model {
  packageName?: string;
  /**
   * @example
   * war/jar/zip
   */
  packageType?: string;
  /**
   * @example
   * http://myoss.oss-cn-****.aliyuncs.com/my-buc/2019-06-30/****.jar
   */
  packageUrl?: string;
  /**
   * @example
   * 1.0.0
   */
  packageVersion?: string;
  static names(): { [key: string]: string } {
    return {
      packageName: 'PackageName',
      packageType: 'PackageType',
      packageUrl: 'PackageUrl',
      packageVersion: 'PackageVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      packageName: 'string',
      packageType: 'string',
      packageUrl: 'string',
      packageVersion: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

