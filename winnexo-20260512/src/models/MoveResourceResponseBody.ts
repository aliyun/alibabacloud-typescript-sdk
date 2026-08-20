// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class MoveResourceResponseBody extends $dara.Model {
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
   * The response message.
   * 
   * @example
   * ok
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * E68654BD-F7BA-5837-8686-5645D739A47C
   */
  requestId?: string;
  /**
   * @remarks
   * The source directory ID, which echoes the input parameter.
   * 
   * @example
   * exampleSourceDirectoryId
   */
  sourceDirectoryId?: string;
  /**
   * @remarks
   * The resource ID, which echoes the input parameter.
   * 
   * @example
   * 2000627
   */
  sourceId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
   * 
   * @example
   * True
   */
  success?: boolean;
  /**
   * @remarks
   * The target directory ID.
   * 
   * @example
   * exampleTargetDirectoryId
   */
  targetDirectoryId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      message: 'message',
      requestId: 'requestId',
      sourceDirectoryId: 'sourceDirectoryId',
      sourceId: 'sourceId',
      success: 'success',
      targetDirectoryId: 'targetDirectoryId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      sourceDirectoryId: 'string',
      sourceId: 'string',
      success: 'boolean',
      targetDirectoryId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

