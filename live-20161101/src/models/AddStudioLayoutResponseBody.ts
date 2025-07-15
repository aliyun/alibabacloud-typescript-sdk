// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddStudioLayoutResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the layout. You can use the ID as a request parameter in the following operations: DeleteStudioLayout, ModifyStudioLayout, and DescribeStudioLayouts.
   * 
   * @example
   * 445409ec-7eaa-461d-8f29-4bec2eb9****
   */
  layoutId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 5c6a2a0d-f228-4a64-af62-20e91b96****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      layoutId: 'LayoutId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      layoutId: 'string',
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

