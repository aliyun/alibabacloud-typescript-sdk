// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSagVbrRelationsResponseBodySagVbrRelations extends $dara.Model {
  /**
   * @remarks
   * The instance ID of the Smart Access Gateway.
   * 
   * @example
   * sag-0nnteglltw6z4b****
   */
  sagInstanceId?: string;
  /**
   * @remarks
   * The ID of the Alibaba Cloud account to which the Smart Access Gateway instance belongs.
   * 
   * @example
   * 16884015121212****
   */
  sagUid?: string;
  /**
   * @remarks
   * The instance ID of the virtual border router (VBR) used for routing.
   * 
   * @example
   * vbr-bp15ihkk93ezxppk****
   */
  vbrInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      sagInstanceId: 'SagInstanceId',
      sagUid: 'SagUid',
      vbrInstanceId: 'VbrInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sagInstanceId: 'string',
      sagUid: 'string',
      vbrInstanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSagVbrRelationsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 17D79124-104A-42DB-8FCA-CE2957CD1723
   */
  requestId?: string;
  /**
   * @remarks
   * The association information.
   */
  sagVbrRelations?: DescribeSagVbrRelationsResponseBodySagVbrRelations[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      sagVbrRelations: 'SagVbrRelations',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      sagVbrRelations: { 'type': 'array', 'itemType': DescribeSagVbrRelationsResponseBodySagVbrRelations },
    };
  }

  validate() {
    if(Array.isArray(this.sagVbrRelations)) {
      $dara.Model.validateArray(this.sagVbrRelations);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

