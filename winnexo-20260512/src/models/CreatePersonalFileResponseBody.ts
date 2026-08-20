// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreatePersonalFileResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response status code.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The directory ID.
   * 
   * @example
   * exampleDirectoryId
   */
  directoryId?: string;
  /**
   * @remarks
   * The creation time.
   * 
   * @example
   * 2025-11-14T02:18:27Z
   */
  gmtCreate?: string;
  /**
   * @remarks
   * The error details.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The updated filter view name.
   * 
   * @example
   * ha-cn-36z45q4xg06_qrs
   */
  name?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 3DAC4165-2401-543B-B5E7-A86AA151E517
   */
  requestId?: string;
  /**
   * @remarks
   * The export scope. Valid values:
   * - ALL: all.
   * - SELECT: selected rows.
   * 
   * @example
   * read:user,read:repo,write:repo,read:org,read:group
   */
  scope?: string;
  /**
   * @remarks
   * The source ID.
   * 
   * @example
   * 2001086
   */
  sourceId?: string;
  /**
   * @remarks
   * The status.
   * 
   * @example
   * 200
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      directoryId: 'directoryId',
      gmtCreate: 'gmtCreate',
      message: 'message',
      name: 'name',
      requestId: 'requestId',
      scope: 'scope',
      sourceId: 'sourceId',
      status: 'status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      directoryId: 'string',
      gmtCreate: 'string',
      message: 'string',
      name: 'string',
      requestId: 'string',
      scope: 'string',
      sourceId: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

