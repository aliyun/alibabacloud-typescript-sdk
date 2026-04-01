// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateParameterGroupResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the parameter template. You can call the [DescribeParameterGroups](https://help.aliyun.com/document_detail/144491.html) operation to query the IDs of parameter templates.
   * 
   * @example
   * rpg-q488w14xvsk****
   */
  parameterGroupId?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 7A41C147-C8D0-4DAE-A1A2-17EBCD60DFA1
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      parameterGroupId: 'ParameterGroupId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      parameterGroupId: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

