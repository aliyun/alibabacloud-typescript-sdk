// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListApplicationAssignmentsForPrincipalResponseBodyApplicationAssignmentApplicationAssignmentInfo extends $dara.Model {
  appId?: string;
  createTime?: string;
  principalName?: string;
  principalType?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      createTime: 'CreateTime',
      principalName: 'PrincipalName',
      principalType: 'PrincipalType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      createTime: 'string',
      principalName: 'string',
      principalType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListApplicationAssignmentsForPrincipalResponseBodyApplicationAssignment extends $dara.Model {
  applicationAssignmentInfo?: ListApplicationAssignmentsForPrincipalResponseBodyApplicationAssignmentApplicationAssignmentInfo[];
  static names(): { [key: string]: string } {
    return {
      applicationAssignmentInfo: 'ApplicationAssignmentInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationAssignmentInfo: { 'type': 'array', 'itemType': ListApplicationAssignmentsForPrincipalResponseBodyApplicationAssignmentApplicationAssignmentInfo },
    };
  }

  validate() {
    if(Array.isArray(this.applicationAssignmentInfo)) {
      $dara.Model.validateArray(this.applicationAssignmentInfo);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListApplicationAssignmentsForPrincipalResponseBody extends $dara.Model {
  applicationAssignment?: ListApplicationAssignmentsForPrincipalResponseBodyApplicationAssignment;
  /**
   * @remarks
   * The maximum number of entries per page.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * This parameter is returned only when the results are truncated. To retrieve the subsequent results, use NextToken in the next call.
   * 
   * @example
   * caeba0bbb2be03f84eb48b699f0a****
   */
  nextToken?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 4507D1CD-526A-4E2B-A1E2-3AB045D1EE0B
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      applicationAssignment: 'ApplicationAssignment',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationAssignment: ListApplicationAssignmentsForPrincipalResponseBodyApplicationAssignment,
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(this.applicationAssignment && typeof (this.applicationAssignment as any).validate === 'function') {
      (this.applicationAssignment as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

