// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateKnowledgeBaseTextResponseBody extends $dara.Model {
  /**
   * @remarks
   * The status code.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The folder ID.
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
   * 2026-04-22T07:10:40.000+00:00
   */
  gmtCreate?: string;
  /**
   * @remarks
   * The error message returned when the request fails.
   * 
   * @example
   * The current zone list is illegal.
   */
  message?: string;
  /**
   * @remarks
   * The image name.
   * 
   * @example
   * p-default-af484147-e026-487b-a9eb-bd25464f0667
   */
  name?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 9005F6D0-748F-559D-ABDA-F4F31B983316
   */
  requestId?: string;
  /**
   * @remarks
   * The permission scope.
   * 
   * @example
   * read:user,read:repo,write:repo,read:org,read:group
   */
  scope?: string;
  /**
   * @remarks
   * The data source ID.
   * 
   * @example
   * 8
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

