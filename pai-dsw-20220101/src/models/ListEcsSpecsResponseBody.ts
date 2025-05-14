// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListEcsSpecsResponseBodyEcsSpecs } from "./ListEcsSpecsResponseBodyEcsSpecs";


export class ListEcsSpecsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The status code. Valid values:
   * 
   * *   InternalError: an internal error. All errors, except for parameter validation errors, are classified as internal errors.
   * *   ValidationError: a parameter validation error.
   * 
   * @example
   * null
   */
  code?: string;
  /**
   * @remarks
   * The specifications of the ECS instances returned on this page.
   */
  ecsSpecs?: ListEcsSpecsResponseBodyEcsSpecs[];
  /**
   * @remarks
   * The HTTP status code. Valid values:
   * 
   * *   400
   * *   404
   * 
   * @example
   * null
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The response message.
   * 
   * @example
   * "XXX"
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * E7D55162-4489-1619-AAF5-3F97D5FCA948
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
  /**
   * @remarks
   * The total number of ECS instances.
   * 
   * @example
   * 35
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      ecsSpecs: 'EcsSpecs',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      ecsSpecs: { 'type': 'array', 'itemType': ListEcsSpecsResponseBodyEcsSpecs },
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.ecsSpecs)) {
      $dara.Model.validateArray(this.ecsSpecs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

