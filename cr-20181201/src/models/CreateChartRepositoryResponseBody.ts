// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateChartRepositoryResponseBody extends $dara.Model {
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
   * Indicates whether the API call was successful. Valid values:
   * 
   * - `true`: The API call was successful.
   * 
   * - `false`: The API call failed.
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
   * crcr-2micxey5ewj4****
   */
  repoId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 60390244-A483-491A-B41D-F866C95380A1
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

