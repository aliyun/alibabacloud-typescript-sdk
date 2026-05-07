// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDigitalEmployeeSkillVersionsResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * Use the UTC time format: yyyy-MM-ddTHH:mm:ssZ
   * 
   * @example
   * 2026-02-06T14:09:11Z
   */
  createTime?: string;
  /**
   * @example
   * test
   */
  description?: string;
  /**
   * @example
   * test
   */
  displayName?: string;
  /**
   * @example
   * true
   */
  enable?: boolean;
  /**
   * @example
   * remark
   */
  remark?: string;
  /**
   * @example
   * test
   */
  skillName?: string;
  /**
   * @remarks
   * Use the UTC time format: yyyy-MM-ddTHH:mm:ssZ
   * 
   * @example
   * 2026-02-06T14:09:11Z
   */
  updateTime?: string;
  /**
   * @example
   * 1770386951147366810
   */
  version?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'createTime',
      description: 'description',
      displayName: 'displayName',
      enable: 'enable',
      remark: 'remark',
      skillName: 'skillName',
      updateTime: 'updateTime',
      version: 'version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      description: 'string',
      displayName: 'string',
      enable: 'boolean',
      remark: 'string',
      skillName: 'string',
      updateTime: 'string',
      version: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDigitalEmployeeSkillVersionsResponseBody extends $dara.Model {
  data?: ListDigitalEmployeeSkillVersionsResponseBodyData[];
  /**
   * @example
   * 0B9377D9-C56B-5C2E-A8A4-A01D6CC3F4B8
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': ListDigitalEmployeeSkillVersionsResponseBodyData },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

