// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddCasterVideoResourceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * CF60DB6A-7FD6-426E-9288-122CC1A52FA7
   */
  requestId?: string;
  /**
   * @remarks
   * The ID of the resource. This parameter can be used as a request parameter in the API operation that you can call to delete the video source in the production studio or modify the video source in the production studio.
   * 
   * @example
   * e5542d98-b08c-46bf-83e9-5b09d08c****
   */
  resourceId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      resourceId: 'ResourceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      resourceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

