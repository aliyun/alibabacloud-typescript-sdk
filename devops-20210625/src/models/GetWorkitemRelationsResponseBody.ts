// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetWorkitemRelationsResponseBodyRelationList extends $dara.Model {
  /**
   * @example
   * aliyun_1384605
   */
  assignedTo?: string;
  /**
   * @example
   * Req
   */
  categoryIdentifier?: string;
  /**
   * @example
   * 1667205617061
   */
  gmtCreate?: string;
  /**
   * @example
   * 1667205617089
   */
  gmtModified?: string;
  /**
   * @example
   * deafe5f33xxxxx6a259d8dafd
   */
  identifier?: string;
  /**
   * @example
   * 2b856dxxxxxxb61d93676255ba
   */
  spaceIdentifier?: string;
  subject?: string;
  /**
   * @example
   * 9uy29901re573f561d69jn40
   */
  workitemTypeIdentifier?: string;
  static names(): { [key: string]: string } {
    return {
      assignedTo: 'assignedTo',
      categoryIdentifier: 'categoryIdentifier',
      gmtCreate: 'gmtCreate',
      gmtModified: 'gmtModified',
      identifier: 'identifier',
      spaceIdentifier: 'spaceIdentifier',
      subject: 'subject',
      workitemTypeIdentifier: 'workitemTypeIdentifier',
    };
  }

  static types(): { [key: string]: any } {
    return {
      assignedTo: 'string',
      categoryIdentifier: 'string',
      gmtCreate: 'string',
      gmtModified: 'string',
      identifier: 'string',
      spaceIdentifier: 'string',
      subject: 'string',
      workitemTypeIdentifier: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetWorkitemRelationsResponseBody extends $dara.Model {
  /**
   * @example
   * InvalidGroup.IdNotFound
   */
  errorCode?: string;
  /**
   * @example
   * error
   */
  errorMsg?: string;
  relationList?: GetWorkitemRelationsResponseBodyRelationList[];
  /**
   * @remarks
   * Id of the request
   * 
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
      errorMsg: 'errorMsg',
      relationList: 'relationList',
      requestId: 'requestId',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMsg: 'string',
      relationList: { 'type': 'array', 'itemType': GetWorkitemRelationsResponseBodyRelationList },
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.relationList)) {
      $dara.Model.validateArray(this.relationList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

