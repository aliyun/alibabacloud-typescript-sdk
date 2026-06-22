// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class OperateImageVulRequest extends $dara.Model {
  /**
   * @remarks
   * The information about the vulnerability to be processed. This parameter is in JSON format and contains the following fields:
   * 
   * - namespace: the image namespace.
   * - repoName: the name of the ACR image repository.
   * - regionId: the region.
   * - instanceId: the ID of the ACR instance.
   * - repoId: the ID of the repository.
   * - tag: the original tag of the image.
   * - digest: the digest of the image.
   * - newTag: the tag of the image after the fix.
   * - uuid: the UUID of the image.
   * - ids: the list of primary key IDs of the vulnerabilities.
   * 
   * @example
   * [{\\"namespace\\":\\"cloud_oa****\\",\\"repoName\\":\\"hybirdc****\\",\\"regionId\\":\\"cn-shanghai\\",\\"instanceId\\":\\"cri-rv4nvbv8iju4****\\",\\"repoId\\":\\"crr-2q7302qrofxg****\\",\\"tag\\":\\"hybird-cloud-web_fix_167115945****\\",\\"digest\\":\\"e1a4fd25884ca2ef8840bb252c9926e4f549df9e046500dd93539b2d458c****\\",\\"newTag\\":\\"hybird-cloud-web_fix_167115996****\\",\\"uuid\\":\\"4ad91dd8c0c02de6574fa98085d0****\\",\\"ids\\":[197540864,197540865,197540869]}]
   */
  info?: string;
  /**
   * @remarks
   * The operation type for image vulnerability fix. Set this parameter to vul_fix.
   * 
   * @example
   * vul_fix
   */
  operateType?: string;
  /**
   * @remarks
   * The vulnerability type. Set this parameter to cve.
   * 
   * @example
   * cve
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      info: 'Info',
      operateType: 'OperateType',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      info: 'string',
      operateType: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

