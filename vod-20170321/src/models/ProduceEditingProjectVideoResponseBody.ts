// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ProduceEditingProjectVideoResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the produced video.
   * 
   * > *   This parameter is returned for each request.
   * > *   If a value is returned for this parameter, the video production task is being asynchronously processed.
   * 
   * @example
   * 006204a11bb386bb25491f95f****
   */
  mediaId?: string;
  /**
   * @remarks
   * The ID of the online editing project.
   * 
   * @example
   * fb2101bf24b4cb318787dc****
   */
  projectId?: string;
  /**
   * @remarks
   * The ID of the request.
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

