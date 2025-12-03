// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateSprintResponseBodySprint extends $dara.Model {
  /**
   * @example
   * 19xx7043xxxxxxx914
   */
  creator?: string;
  /**
   * @example
   * xxx
   */
  description?: string;
  /**
   * @example
   * 1623916393000
   */
  endDate?: number;
  /**
   * @example
   * 1623916393000
   */
  gmtCreate?: number;
  /**
   * @example
   * 1623916393000
   */
  gmtModified?: number;
  /**
   * @example
   * e8bxxxxxxxxxxxxxxxx23
   */
  identifier?: string;
  /**
   * @example
   * 19xx7043xxxxxxx914
   */
  modifier?: string;
  /**
   * @example
   * demo示例项目
   */
  name?: string;
  /**
   * @example
   * public
   */
  scope?: string;
  /**
   * @example
   * 5e70xxxxxxcd000xxxxe96
   */
  spaceIdentifier?: string;
  /**
   * @example
   * 1638403200000
   */
  startDate?: number;
  /**
   * @example
   * TODO
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      creator: 'creator',
      description: 'description',
      endDate: 'endDate',
      gmtCreate: 'gmtCreate',
      gmtModified: 'gmtModified',
      identifier: 'identifier',
      modifier: 'modifier',
      name: 'name',
      scope: 'scope',
      spaceIdentifier: 'spaceIdentifier',
      startDate: 'startDate',
      status: 'status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      creator: 'string',
      description: 'string',
      endDate: 'number',
      gmtCreate: 'number',
      gmtModified: 'number',
      identifier: 'string',
      modifier: 'string',
      name: 'string',
      scope: 'string',
      spaceIdentifier: 'string',
      startDate: 'number',
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

export class CreateSprintResponseBody extends $dara.Model {
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
   * ASSDS-ASSASX-XSAXSA-XSAXSAXS
   */
  requestId?: string;
  sprint?: CreateSprintResponseBodySprint;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'errorCode',
      errorMsg: 'errorMsg',
      requestId: 'requestId',
      sprint: 'sprint',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMsg: 'string',
      requestId: 'string',
      sprint: CreateSprintResponseBodySprint,
      success: 'boolean',
    };
  }

  validate() {
    if(this.sprint && typeof (this.sprint as any).validate === 'function') {
      (this.sprint as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

