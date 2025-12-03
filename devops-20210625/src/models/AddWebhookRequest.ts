// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddWebhookRequest extends $dara.Model {
  /**
   * @example
   * f0b1e61db5961df5975a93f9129d2513
   */
  accessToken?: string;
  description?: string;
  /**
   * @example
   * false
   */
  enableSslVerification?: boolean;
  /**
   * @example
   * true
   */
  mergeRequestsEvents?: boolean;
  /**
   * @example
   * false
   */
  noteEvents?: boolean;
  /**
   * @example
   * true
   */
  pushEvents?: boolean;
  /**
   * @example
   * xxxx
   */
  secretToken?: string;
  /**
   * @example
   * false
   */
  tagPushEvents?: boolean;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * https://xxxxx
   */
  url?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 60de7a6852743a5162b5f957
   */
  organizationId?: string;
  static names(): { [key: string]: string } {
    return {
      accessToken: 'accessToken',
      description: 'description',
      enableSslVerification: 'enableSslVerification',
      mergeRequestsEvents: 'mergeRequestsEvents',
      noteEvents: 'noteEvents',
      pushEvents: 'pushEvents',
      secretToken: 'secretToken',
      tagPushEvents: 'tagPushEvents',
      url: 'url',
      organizationId: 'organizationId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessToken: 'string',
      description: 'string',
      enableSslVerification: 'boolean',
      mergeRequestsEvents: 'boolean',
      noteEvents: 'boolean',
      pushEvents: 'boolean',
      secretToken: 'string',
      tagPushEvents: 'boolean',
      url: 'string',
      organizationId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

