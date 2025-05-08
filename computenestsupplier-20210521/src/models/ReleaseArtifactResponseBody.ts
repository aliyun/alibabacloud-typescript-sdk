// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ReleaseArtifactResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the artifact.
   * 
   * @example
   * artifact-9feded91880e4c78xxxx
   */
  artifactId?: string;
  /**
   * @remarks
   * The content of the artifact.
   * 
   * @example
   * "{\\"Url\\":\\"https://computenest-artifacts-draft-cn-hangzhou.oss-cn-hangzhou.aliyuncs.com/130920852836xxxx/cn-hangzhou/service-8072a04e5a134382xxxx/165095355xxxx/changes.txt\\",\\"ConfigurationMetadata\\":\\"{\\\\\\"WorkDir\\\\\\":\\\\\\"/root\\\\\\",\\\\\\"Platform\\\\\\":\\\\\\"Linux\\\\\\",\\\\\\"CommandType\\\\\\":\\\\\\"RunShellScript\\\\\\",\\\\\\"UpgradeScript\\\\\\":\\\\\\"cd /root\\\\\\\\ncp changes.txt cpchanges.txt\\\\\\\\nmv changes.txt mvchangge.txt\\\\\\"}\\"}"
   */
  artifactProperty?: string;
  /**
   * @remarks
   * The type of the artifact.
   * 
   * @example
   * File
   */
  artifactType?: string;
  /**
   * @remarks
   * The version of the artifact.
   * 
   * @example
   * draft
   */
  artifactVersion?: string;
  /**
   * @remarks
   * The description of the artifact.
   * 
   * @example
   * Description
   */
  description?: string;
  /**
   * @remarks
   * The time when the artifact was modified.
   * 
   * @example
   * 1650954178000
   */
  gmtModified?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 3818BA7D-3F50-1A44-9FF3-04A52A59XXXX
   */
  requestId?: string;
  /**
   * @remarks
   * The state of the artifact. Valid values:
   * 
   * *   Created: The artifact is created.
   * *   Scanning: The artifact is being scanned.
   * *   ScanFailed: The artifact failed to be scanned.
   * *   Delivering: The artifact is being distributed.
   * *   Available: The artifact is available.
   * *   Deleted: The artifact is deleted.
   * 
   * @example
   * Created
   */
  status?: string;
  /**
   * @remarks
   * The version name of the artifact.
   * 
   * @example
   * V1.0
   */
  versionName?: string;
  static names(): { [key: string]: string } {
    return {
      artifactId: 'ArtifactId',
      artifactProperty: 'ArtifactProperty',
      artifactType: 'ArtifactType',
      artifactVersion: 'ArtifactVersion',
      description: 'Description',
      gmtModified: 'GmtModified',
      requestId: 'RequestId',
      status: 'Status',
      versionName: 'VersionName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      artifactId: 'string',
      artifactProperty: 'string',
      artifactType: 'string',
      artifactVersion: 'string',
      description: 'string',
      gmtModified: 'string',
      requestId: 'string',
      status: 'string',
      versionName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

