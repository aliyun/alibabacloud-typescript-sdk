// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateRepositoryResponseBody extends $dara.Model {
  /**
   * @remarks
   * The return value.
   * 
   * @example
   * success
   */
  code?: string;
  /**
   * @remarks
   * Indicates whether the request is successful.
   * 
   * @example
   * true
   */
  isSuccess?: boolean;
  /**
   * @remarks
   * The ID of the image repository.
   * 
   * @example
   * crr-xwvi3osiy4ff****
   */
  repoId?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 886FB272-15C3-44FC-AA54-F4ABD5B93A28
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      isSuccess: 'IsSuccess',
      repoId: 'RepoId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      isSuccess: 'boolean',
      repoId: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

