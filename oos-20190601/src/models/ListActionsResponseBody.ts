// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListActionsResponseBodyActions extends $dara.Model {
  /**
   * @remarks
   * The type of the action.
   * 
   * 1.  Atomic actions
   * 
   *     *   Atomic.API
   *     *   Atomic.Trigger
   *     *   Atomic.Control
   *     *   Atomic.Embedded
   * 
   * 2.  Cloud product actions
   * 
   *     *   Product.ECS
   *     *   Product.RDS
   *     *   Product.VPC
   *     *   Product.FC
   *     *   ...
   * 
   * @example
   * ACS::Template
   */
  actionType?: string;
  /**
   * @remarks
   * The time when the action was created.
   * 
   * @example
   * 2019-05-16T10:26:14Z
   */
  createdDate?: string;
  /**
   * @remarks
   * The description of the action.
   * 
   * @example
   * ReplaceSystemDisk
   */
  description?: string;
  /**
   * @remarks
   * The name of the action.
   * 
   * @example
   * ACS::ECS::ReplaceSystemDisk
   */
  OOSActionName?: string;
  /**
   * @remarks
   * The number of times that the action is used.
   * 
   * @example
   * 5
   */
  popularity?: number;
  /**
   * @remarks
   * The parameters of the action.
   * 
   * @example
   * { "ImageId": { "Description": "The mirror ID you will use when resetting the system", "Type": "String" }, "InstanceId": { "Description": "the instance id that you will handle .", "Type": "String" } }
   */
  properties?: string;
  /**
   * @remarks
   * The version of the template that corresponds to the action.
   * 
   * >  For atomic actions, this parameter is not returned.
   * 
   * @example
   * v1
   */
  templateVersion?: string;
  static names(): { [key: string]: string } {
    return {
      actionType: 'ActionType',
      createdDate: 'CreatedDate',
      description: 'Description',
      OOSActionName: 'OOSActionName',
      popularity: 'Popularity',
      properties: 'Properties',
      templateVersion: 'TemplateVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actionType: 'string',
      createdDate: 'string',
      description: 'string',
      OOSActionName: 'string',
      popularity: 'number',
      properties: 'string',
      templateVersion: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListActionsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details of the actions.
   */
  actions?: ListActionsResponseBodyActions[];
  /**
   * @remarks
   * The number of entries returned per page.
   * 
   * @example
   * 50
   */
  maxResults?: number;
  /**
   * @remarks
   * The token that is used to retrieve the next page of results.
   * 
   * @example
   * xxx
   */
  nextToken?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * F9154C02-F847-4563-BB6A-6DD01A4F0
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      actions: 'Actions',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actions: { 'type': 'array', 'itemType': ListActionsResponseBodyActions },
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.actions)) {
      $dara.Model.validateArray(this.actions);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

