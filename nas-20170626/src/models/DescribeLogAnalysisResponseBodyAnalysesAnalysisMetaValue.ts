// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeLogAnalysisResponseBodyAnalysesAnalysisMetaValue extends $dara.Model {
  /**
   * @remarks
   * The name of the dedicated Logstore that is used to store NAS operation logs.
   * 
   * @example
   * nas-nfs
   */
  logstore?: string;
  /**
   * @remarks
   * The name of the project where the dedicated Logstore resides.
   * 
   * @example
   * nas-1746495857602745-cn-hangzhou
   */
  project?: string;
  /**
   * @remarks
   * The region where the dedicated Logstore resides.
   * 
   * @example
   * cn-hangzhou
   */
  region?: string;
  /**
   * @remarks
   * The role that is used by NAS to access Simple Log Service.
   * 
   * @example
   * acs:ram::162165525211xxxx:role/aliyunnaslogarchiverole
   */
  roleArn?: string;
  static names(): { [key: string]: string } {
    return {
      logstore: 'Logstore',
      project: 'Project',
      region: 'Region',
      roleArn: 'RoleArn',
    };
  }

  static types(): { [key: string]: any } {
    return {
      logstore: 'string',
      project: 'string',
      region: 'string',
      roleArn: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

