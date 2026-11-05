// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListRegionIdRequest extends $dara.Model {
  /**
   * @remarks
   * The product type for querying available image regions. If this parameter is omitted, the query defaults to CloudApp. Valid values:
   * - **CloudGame**: cloud gaming
   * - **CloudApp**: WUYING Cloud Application
   * - **CloudBrowser**: secure browser
   * - **CloudDesktop**: WUYING Cloud Desktop
   * - **ImageBuilder**: image creation resources
   * - **ImageValidate**: image validation resources
   * - **AndroidCloud**: Android cloud
   * - **GpuRender**: GPU rendering
   * - **AndroidGpuRender**: Android cloud GPU rendering
   * - **WuyingServer**: enterprise edition workstation
   * - **GpuProxy**: GPU remote rendering proxy
   * - **GpuCache**: GPU remote rendering cache
   * - **AIAgent**: AI agent service
   * - **HostedDesktop**: hosted desktop
   * - **WuyingWorkstation**: personal edition container workstation
   * - **WuyingWorkstationBusiness**: business edition container workstation
   * - **WuyingWorkstationTeam**: Linggou container workstation team edition
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

