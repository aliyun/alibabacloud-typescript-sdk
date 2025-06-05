// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeContainerLogResponseBody extends $dara.Model {
  /**
   * @remarks
   * The container name.
   * 
   * @example
   * nginx
   */
  containerName?: string;
  /**
   * @remarks
   * The content of the log.
   * 
   * @example
   * {}
   */
  content?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * CA850ADA-****-4AC8-****-5B5990EAB7D0
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      containerName: 'ContainerName',
      content: 'Content',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      containerName: 'string',
      content: 'string',
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

