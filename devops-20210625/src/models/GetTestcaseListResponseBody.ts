// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetTestcaseListResponseBodyTestcaseAssignedTo extends $dara.Model {
  /**
   * @example
   * 12xxxxx456
   */
  assignedToIdenttifier?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      assignedToIdenttifier: 'assignedToIdenttifier',
      name: 'name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      assignedToIdenttifier: 'string',
      name: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTestcaseListResponseBodyTestcaseCustomFields extends $dara.Model {
  /**
   * @example
   * User
   */
  fieldClassName?: string;
  /**
   * @example
   * Input
   */
  fieldFormat?: string;
  /**
   * @example
   * 85702b33f14bfa82cb458173ba
   */
  fieldIdentifier?: string;
  /**
   * @example
   * d7f112f9d023e2108fa1b0d8
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      fieldClassName: 'fieldClassName',
      fieldFormat: 'fieldFormat',
      fieldIdentifier: 'fieldIdentifier',
      value: 'value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fieldClassName: 'string',
      fieldFormat: 'string',
      fieldIdentifier: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTestcaseListResponseBodyTestcaseSpace extends $dara.Model {
  /**
   * @example
   * 22c32972b853cd703dbf0efe4c
   */
  spaceIdentifier?: string;
  /**
   * @example
   * TestRepo
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      spaceIdentifier: 'spaceIdentifier',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      spaceIdentifier: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTestcaseListResponseBodyTestcaseTags extends $dara.Model {
  name?: string;
  /**
   * @example
   * 85702b33f14bxxxxxx58173ba
   */
  tagIdentifier?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'name',
      tagIdentifier: 'tagIdentifier',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      tagIdentifier: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTestcaseListResponseBodyTestcase extends $dara.Model {
  assignedTo?: GetTestcaseListResponseBodyTestcaseAssignedTo;
  /**
   * @example
   * Req
   */
  categoryIdentifier?: string;
  customFields?: GetTestcaseListResponseBodyTestcaseCustomFields[];
  /**
   * @example
   * 1621578648000
   */
  gmtCreate?: number;
  /**
   * @example
   * e8bxxxxxxxxxxxxxxxx23
   */
  identifier?: string;
  space?: GetTestcaseListResponseBodyTestcaseSpace;
  /**
   * @example
   * 测试工作项
   */
  subject?: string;
  tags?: GetTestcaseListResponseBodyTestcaseTags[];
  static names(): { [key: string]: string } {
    return {
      assignedTo: 'assignedTo',
      categoryIdentifier: 'categoryIdentifier',
      customFields: 'customFields',
      gmtCreate: 'gmtCreate',
      identifier: 'identifier',
      space: 'space',
      subject: 'subject',
      tags: 'tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      assignedTo: GetTestcaseListResponseBodyTestcaseAssignedTo,
      categoryIdentifier: 'string',
      customFields: { 'type': 'array', 'itemType': GetTestcaseListResponseBodyTestcaseCustomFields },
      gmtCreate: 'number',
      identifier: 'string',
      space: GetTestcaseListResponseBodyTestcaseSpace,
      subject: 'string',
      tags: { 'type': 'array', 'itemType': GetTestcaseListResponseBodyTestcaseTags },
    };
  }

  validate() {
    if(this.assignedTo && typeof (this.assignedTo as any).validate === 'function') {
      (this.assignedTo as any).validate();
    }
    if(Array.isArray(this.customFields)) {
      $dara.Model.validateArray(this.customFields);
    }
    if(this.space && typeof (this.space as any).validate === 'function') {
      (this.space as any).validate();
    }
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTestcaseListResponseBody extends $dara.Model {
  /**
   * @example
   * Openapi.RequestError
   */
  errorCode?: string;
  /**
   * @example
   * error
   */
  errorMsg?: string;
  /**
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @example
   * ""
   */
  nextToken?: string;
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
  testcase?: GetTestcaseListResponseBodyTestcase[];
  /**
   * @example
   * 10
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'errorCode',
      errorMsg: 'errorMsg',
      maxResults: 'maxResults',
      nextToken: 'nextToken',
      requestId: 'requestId',
      success: 'success',
      testcase: 'testcase',
      totalCount: 'totalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMsg: 'string',
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
      success: 'boolean',
      testcase: { 'type': 'array', 'itemType': GetTestcaseListResponseBodyTestcase },
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.testcase)) {
      $dara.Model.validateArray(this.testcase);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

