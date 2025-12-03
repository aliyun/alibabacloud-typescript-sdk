// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListPipelineRelationsResponseBodyPipelineRelations extends $dara.Model {
  /**
   * @example
   * 12234
   */
  refObjectId?: number;
  static names(): { [key: string]: string } {
    return {
      refObjectId: 'refObjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      refObjectId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPipelineRelationsResponseBody extends $dara.Model {
  /**
   * @example
   * ""
   */
  errorCode?: string;
  /**
   * @example
   * ""
   */
  errorMessage?: string;
  pipelineRelations?: ListPipelineRelationsResponseBodyPipelineRelations[];
  /**
   * @example
   * ASSDS-ASSASX-XSAXSA-XSAXSAXS
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'errorCode',
      errorMessage: 'errorMessage',
      pipelineRelations: 'pipelineRelations',
      requestId: 'requestId',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      pipelineRelations: { 'type': 'array', 'itemType': ListPipelineRelationsResponseBodyPipelineRelations },
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.pipelineRelations)) {
      $dara.Model.validateArray(this.pipelineRelations);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

