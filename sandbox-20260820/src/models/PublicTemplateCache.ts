// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PublicTemplateCache extends $dara.Model {
  /**
   * @example
   * 2026-09-18T10:00:00Z
   */
  createdTime?: string;
  /**
   * @example
   * sha256:8f3c2a1b
   */
  imageDigest?: string;
  /**
   * @example
   * 512
   */
  imageSizeMB?: number;
  /**
   * @example
   * 80
   */
  progress?: number;
  /**
   * @example
   * 2026-09-18T10:05:00Z
   */
  readyTime?: string;
  /**
   * @example
   * Success
   */
  status?: string;
  /**
   * @example
   * 镜像预热任务排队中
   */
  statusReason?: string;
  /**
   * @example
   * 13b721e6-8cc8-5df2-af13-80316f7508af
   */
  teamID?: string;
  /**
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

