// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDepGroupTreeDataResponseBodyDataGroupDTOS extends $dara.Model {
  name?: string;
  /**
   * @example
   * 555555
   */
  skillGroupId?: number;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      skillGroupId: 'SkillGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      skillGroupId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDepGroupTreeDataResponseBodyData extends $dara.Model {
  /**
   * @example
   * 10
   */
  depGroupId?: string;
  depGroupName?: string;
  groupDTOS?: GetDepGroupTreeDataResponseBodyDataGroupDTOS[];
  static names(): { [key: string]: string } {
    return {
      depGroupId: 'DepGroupId',
      depGroupName: 'DepGroupName',
      groupDTOS: 'GroupDTOS',
    };
  }

  static types(): { [key: string]: any } {
    return {
      depGroupId: 'string',
      depGroupName: 'string',
      groupDTOS: { 'type': 'array', 'itemType': GetDepGroupTreeDataResponseBodyDataGroupDTOS },
    };
  }

  validate() {
    if(Array.isArray(this.groupDTOS)) {
      $dara.Model.validateArray(this.groupDTOS);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDepGroupTreeDataResponseBody extends $dara.Model {
  /**
   * @example
   * Success
   */
  code?: string;
  data?: GetDepGroupTreeDataResponseBodyData[];
  /**
   * @example
   * xxxx
   */
  message?: string;
  /**
   * @example
   * EE338D98-9BD3-4413-B165
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: { 'type': 'array', 'itemType': GetDepGroupTreeDataResponseBodyData },
      message: 'string',
      requestId: 'string',
      success: 'string',
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

