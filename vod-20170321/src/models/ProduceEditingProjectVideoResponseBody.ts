// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ProduceEditingProjectVideoResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the produced video.
   * > - The video production operation synchronously returns the ID of the produced video.
   * > - When MediaId is returned, the video production has entered the asynchronous processing phase.
   * 
   * @example
   * 006204a11bb386bb25491f95f****
   */
  mediaId?: string;
  /**
   * @remarks
   * The online editing project ID.
   * 
   * @example
   * fb2101bf24b4cb318787dc****
   */
  projectId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 25818875-5F78-4AF6-D7393642CA58****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      mediaId: 'MediaId',
      projectId: 'ProjectId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mediaId: 'string',
      projectId: 'string',
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

