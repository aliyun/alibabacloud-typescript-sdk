// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ReleaseArtifactResponseBody extends $dara.Model {
  /**
   * @remarks
   * The artifact ID.
   * 
   * @example
   * artifact-9feded91880e4c78****
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
   * The artifact type.
   * 
   * @example
   * File
   */
  artifactType?: string;
  /**
   * @remarks
   * The artifact version.
   * 
   * @example
   * draft
   */
  artifactVersion?: string;
  /**
   * @remarks
   * The artifact description.
   * 
   * @example
   * Redhat8_0 image
   */
  description?: string;
  /**
   * @remarks
   * The time when the artifact was last modified.
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
   * 86CAC31E-3527-562C-869F-347E931C9B25
   */
  requestId?: string;
  /**
   * @remarks
   * The status of the artifact.
   * 
   * Valid values:
   * 
   * - Created: The artifact is created.
   * 
   * - Scanning: The artifact is being scanned.
   * 
   * - ScanFailed: The artifact failed to be scanned.
   * 
   * - Delivering: The artifact is being distributed.
   * 
   * - Available: The artifact is available.
   * 
   * - Deleted: The artifact is deleted.
   * 
   * @example
   * Created
   */
  status?: string;
  /**
   * @remarks
   * The name of the artifact version.
   * 
   * @example
   * OSS association upgrade test
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

