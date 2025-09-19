// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeClusterVulStatisticsRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the container cluster.
   * 
   * @example
   * c471f0f61b9c04f8380556e922cf1****
   */
  clusterId?: string;
  /**
   * @remarks
   * The type of the vulnerabilities. Valid values:
   * 
   * *   **cve**: Linux software vulnerabilities
   * *   **app**: application vulnerabilities
   * *   **sca**: vulnerabilities that are detected based on software component analysis
   * 
   * @example
   * cve,app,sca
   */
  types?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      types: 'Types',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      types: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

