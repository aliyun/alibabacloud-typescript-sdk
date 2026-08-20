// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class MoveKnowledgeBaseResourceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response code.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The target knowledge base ID. This value is echoed from the request parameter.
   * 
   * @example
   * exampleKnowledgeId
   */
  knowledgeId?: string;
  /**
   * @remarks
   * The description of the status code.
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
   * 375701FC-2FB9-5782-BE8F-A3F5E2F2158C
   */
  requestId?: string;
  /**
   * @remarks
   * The source directory ID. This value is echoed from the request parameter.
   * 
   * @example
   * exampleSourceDirectoryId
   */
  sourceDirectoryId?: string;
  /**
   * @remarks
   * The unique identifier on the business system side, that is, the business ID.
   * 
   * @example
   * 2000358
   */
  sourceId?: string;
  /**
   * @remarks
   * The target directory ID. This value is echoed from the request parameter.
   * 
   * @example
   * exampleTargetDirectoryId
   */
  targetDirectoryId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      knowledgeId: 'knowledgeId',
      message: 'message',
      requestId: 'requestId',
      sourceDirectoryId: 'sourceDirectoryId',
      sourceId: 'sourceId',
      targetDirectoryId: 'targetDirectoryId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      knowledgeId: 'string',
      message: 'string',
      requestId: 'string',
      sourceDirectoryId: 'string',
      sourceId: 'string',
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

