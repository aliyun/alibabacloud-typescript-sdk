// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListReleaseVersionsResponseBodyReleaseVersions extends $dara.Model {
  /**
   * @remarks
   * The IaaS type.
   * 
   * @example
   * ECS
   */
  iaasType?: string;
  /**
   * @remarks
   * The EMR version.
   * 
   * @example
   * EMR-5.3.0
   */
  releaseVersion?: string;
  /**
   * @remarks
   * The version series.
   * 
   * @example
   * EMR-6.X
   */
  series?: string;
  static names(): { [key: string]: string } {
    return {
      iaasType: 'IaasType',
      releaseVersion: 'ReleaseVersion',
      series: 'Series',
    };
  }

  static types(): { [key: string]: any } {
    return {
      iaasType: 'string',
      releaseVersion: 'string',
      series: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

