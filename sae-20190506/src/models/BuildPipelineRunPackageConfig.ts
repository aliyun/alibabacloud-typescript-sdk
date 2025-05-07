// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BuildPipelineRunPackageConfig extends $dara.Model {
  packageName?: string;
  packageType?: string;
  packageUrl?: string;
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

