// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RegisterLineageRelationResponseBodyLineageRelation extends $dara.Model {
  /**
   * @remarks
   * The unique identifier of the destination entity.
   * 
   * @example
   * custom-report.month_stat_user
   */
  destEntityQualifiedName?: string;
  /**
   * @remarks
   * The ID of the lineage between entities.
   * 
   * @example
   * dfsldfdlsfdsaaaabbbb
   */
  relationshipGuid?: string;
  /**
   * @remarks
   * The unique identifier of the source entity.
   * 
   * @example
   * maxcompute-table.project.table
   */
  srcEntityQualifiedName?: string;
  static names(): { [key: string]: string } {
    return {
      destEntityQualifiedName: 'DestEntityQualifiedName',
      relationshipGuid: 'RelationshipGuid',
      srcEntityQualifiedName: 'SrcEntityQualifiedName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      destEntityQualifiedName: 'string',
      relationshipGuid: 'string',
      srcEntityQualifiedName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RegisterLineageRelationResponseBody extends $dara.Model {
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * 1010210001
   */
  errorCode?: string;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * The entity of lineage not exist, xxx
   */
  errorMessage?: string;
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The lineage.
   */
  lineageRelation?: RegisterLineageRelationResponseBodyLineageRelation;
  /**
   * @remarks
   * The request ID. You can locate logs and troubleshoot issues based on the ID.
   * 
   * @example
   * EE50E05E-028C-182B-9xxx
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      httpStatusCode: 'HttpStatusCode',
      lineageRelation: 'LineageRelation',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      httpStatusCode: 'number',
      lineageRelation: RegisterLineageRelationResponseBodyLineageRelation,
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.lineageRelation && typeof (this.lineageRelation as any).validate === 'function') {
      (this.lineageRelation as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

