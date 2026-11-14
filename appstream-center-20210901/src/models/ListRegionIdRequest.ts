// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListRegionIdRequest extends $dara.Model {
  /**
   * @remarks
   * The product type for querying available image regions. If this parameter is omitted, the query is performed based on CloudApp. Valid values:
   * - **CloudGame**: cloud gaming
   * - **CloudApp**: WUYING cloud application
   * - **CloudBrowser**: secure browser
   * - **CloudDesktop**: WUYING cloud desktop
   * - **ImageBuilder**: image creation resource
   * - **ImageValidate**: image validation resource
   * - **AndroidCloud**: Android cloud
   * - **GpuRender**: GPU rendering
   * - **AndroidGpuRender**: Android cloud GPU rendering
   * - **WuyingServer**: enterprise workstation
   * - **GpuProxy**: GPU remote rendering proxy
   * - **GpuCache**: GPU remote rendering cache
   * - **AIAgent**: AI agent service
   * - **HostedDesktop**: hosted computer
   * - **WuyingWorkstation**: personal container workstation
   * - **WuyingWorkstationBusiness**: business container workstation
   * - **WuyingWorkstationTeam**: LingGou container workstation team edition
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

