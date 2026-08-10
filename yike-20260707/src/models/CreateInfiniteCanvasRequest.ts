// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateInfiniteCanvasRequest extends $dara.Model {
  /**
   * @remarks
   * The cover URL.
   * 
   * @example
   * https://tagvvcloud-material-center-prod.oss-cn-hangzhou.aliyuncs.com/sumvideo/utils_image/sumvideo-video-cover.png
   */
  coverUrl?: string;
  /**
   * @remarks
   * The project ID.
   * 
   * @example
   * pd_061716****
   */
  productionId?: string;
  /**
   * @remarks
   * The project title.
   * 
   * This parameter is required.
   * 
   * @example
   * title
   */
  title?: string;
  /**
   * @remarks
   * The workspace ID.
   * 
   * @example
   * ws_zna577pdximv***
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      coverUrl: 'CoverUrl',
      productionId: 'ProductionId',
      title: 'Title',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      coverUrl: 'string',
      productionId: 'string',
      title: 'string',
      workspaceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

