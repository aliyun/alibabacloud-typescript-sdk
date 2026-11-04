// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PublicTemplateCache extends $dara.Model {
  /**
   * @remarks
   * The creation time in UTC.
   * 
   * @example
   * 2026-09-18T10:00:00Z
   */
  createdTime?: string;
  /**
   * @remarks
   * The digest of the cached image.
   * 
   * @example
   * sha256:8f3c2a1b
   */
  imageDigest?: string;
  /**
   * @remarks
   * The size of the cached image, in MB.
   * 
   * @example
   * 512
   */
  imageSizeMB?: number;
  /**
   * @remarks
   * The prefetch progress percentage.
   * 
   * @example
   * 80
   */
  progress?: number;
  /**
   * @remarks
   * The ready time in UTC.
   * 
   * @example
   * 2026-09-18T10:05:00Z
   */
  readyTime?: string;
  /**
   * @remarks
   * The cache status. Valid values: InProgress, Success, Failed, Deleting, and Evicted.
   * 
   * @example
   * Success
   */
  status?: string;
  /**
   * @remarks
   * The reason for the status. This parameter is backfilled when the status is not Success.
   * 
   * @example
   * The image prefetch task is queued
   */
  statusReason?: string;
  /**
   * @remarks
   * The team ID.
   * 
   * @example
   * 13b721e6-8cc8-5df2-af13-80316f7508af
   */
  teamID?: string;
  /**
   * @remarks
   * The unique identifier of the template.
   * 
   * @example
   * us7dxqaezw5uu7aa2cm5
   */
  templateID?: string;
  static names(): { [key: string]: string } {
    return {
      createdTime: 'createdTime',
      imageDigest: 'imageDigest',
      imageSizeMB: 'imageSizeMB',
      progress: 'progress',
      readyTime: 'readyTime',
      status: 'status',
      statusReason: 'statusReason',
      teamID: 'teamID',
      templateID: 'templateID',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createdTime: 'string',
      imageDigest: 'string',
      imageSizeMB: 'number',
      progress: 'number',
      readyTime: 'string',
      status: 'string',
      statusReason: 'string',
      teamID: 'string',
      templateID: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

