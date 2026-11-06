// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListRegionIdRequest extends $dara.Model {
  /**
   * @remarks
   * The product type for querying available image regions. If this parameter is omitted, the query is performed based on CloudApp. Valid values:
   * 
   * - **CloudGame**: cloud gaming
   * - **CloudApp**: WUYING Cloud App
   * - **CloudBrowser**: secure browser
   * - **CloudDesktop**: WUYING Cloud Desktop
   * - **ImageBuilder**: image creation resources
   * - **ImageValidate**: image validation resources
   * - **AndroidCloud**: Android cloud
   * - **GpuRender**: GPU rendering
   * - **AndroidGpuRender**: Android cloud GPU rendering
   * - **WuyingServer**: Enterprise Edition workstation
   * - **GpuProxy**: GPU remote rendering proxy
   * - **GpuCache**: GPU remote rendering cache
   * - **AIAgent**: AI agent service
   * - **HostedDesktop**: hosted desktop
   * - **WuyingWorkstation**: Personal Edition container workstation
   * - **WuyingWorkstationBusiness**: Business Edition container workstation
   * - **WuyingWorkstationTeam**: Linggou container workstation Team Edition
   * 
   * @example
   * CloudApp
   */
  productType?: string;
  static names(): { [key: string]: string } {
    return {
      productType: 'ProductType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      productType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

